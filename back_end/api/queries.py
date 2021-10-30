from .models import Patient
from ariadne import ObjectType
query = ObjectType("Query")
@query.field("patients")
def resolve_patients(obj, info):
    try:
        patients = [patient.to_dict() for patient in Patient.query.all()]
        payload = {
            "success": True,
            "patients": patients
        }
    except Exception as error:
        payload = {
            "success": False,
            "errors": [str(error)]
        }
    return payload