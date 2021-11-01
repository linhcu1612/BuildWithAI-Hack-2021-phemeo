from ariadne import ObjectType
import pandas as pd
import numpy as np

data = pd.read_csv('api/data/clean_data.csv')
data['name'] ='Anynomous'
gpa_cols = [col for col in data.columns if col.endswith('SGPA')]
data['gpa'] = data[gpa_cols].mean(axis=1)
students_data = data.drop(columns=gpa_cols)
students_data.columns = students_data.columns.str.lower()
students_data = students_data.rename(columns={'label': 'mental_status'})
students_data.columns
students_data = students_data.to_dict('records')

query = ObjectType("Query")

@query.field("Students")
def resolve_students(*_,limit=None):
    try:
        students = students_data[:limit]
        payload = {
            "success": True,
            "students": students
        }
    except Exception as error:
        payload = {
            "success": False,
            "errors": [str(error)],
            "public_spaces": [],
        }
    return payload