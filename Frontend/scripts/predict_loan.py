import sys
import json
import pickle
import numpy as np

def predict_loan(data):
    # Load the model
    model_path = r"C:\Users\Danie\Downloads\startup-genius+\loan_approval_model.pkl"
    with open(model_path, 'rb') as file:
        model = pickle.load(file)
    
    # Process input data
    features = [
        float(data['annualRevenue']),
        float(data['profitMargin']),
        float(data['yearsInBusiness']),
        float(data['creditScore'].split('-')[0]),  # Take lower bound of credit score
        float(data['debtToIncomeRatio']),
        float(data['marketGrowthRate'].replace('%', '').split('-')[0]),  # Take lower bound of growth rate
        float(data['loanAmountRequested'])
    ]
    
    # Make prediction
    prediction = model.predict([features])[0]
    
    return "approved" if prediction == 1 else "rejected"

if __name__ == "__main__":
    input_data = json.loads(sys.argv[1])
    result = predict_loan(input_data)
    print(result) 