import sys
import json
import pickle
import numpy as np

def load_model():
    with open('C:/Users/Danie/Downloads/startup-genius+/loan_approval_model.pkl', 'rb') as f:
        return pickle.load(f)

def predict(data):
    model = load_model()
    
    # Prepare input features in the correct order
    features = np.array([
        data['annual_revenue'],
        data['profit_margin'],
        data['years_in_business'],
        data['credit_score'],
        data['debt_to_income_ratio'],
        data['loan_amount']
    ]).reshape(1, -1)
    
    prediction = model.predict(features)[0]
    probability = model.predict_proba(features)[0]
    
    return {
        'approved': bool(prediction),
        'probability': float(max(probability)),
        'message': 'Loan Approved!' if prediction else 'Loan Not Approved'
    }

if __name__ == '__main__':
    input_data = json.loads(sys.argv[1])
    result = predict(input_data)
    print(json.dumps(result)) 