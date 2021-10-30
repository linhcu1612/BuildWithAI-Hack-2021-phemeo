from api import db
from datetime import datetime
from api.models import Patient

db.create_all()
patient =Patient()
created_at_time = datetime.today()
patient1 = Patient(name="Chu Minh Hieu",phone_number="0451886468",email ="hieucm@gmail.com",created_at=created_at_time)
patient1.to_dict()
db.session.add(patient1)
db.session.rollback()
db.session.commit()

