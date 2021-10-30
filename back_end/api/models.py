from main import db

class Patient(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    phone_number = db.Column(db.String)
    email = db.Column(db.String)
    created_at = db.Column(db.DateTime)
    
    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "phone_number": self.phone_number,
            "email": self.email,
            "created_at": str(self.created_at.strftime("%m/%d/%Y, %H:%M:%S"))
        }