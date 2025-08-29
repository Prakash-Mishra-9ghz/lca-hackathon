from flask import Flask, request, jsonify
from flask_cors import CORS
from models.lca_engine import run_lca

app = Flask(__name__)
CORS(app)

@app.route("/analyze", methods=["POST"])
def analyze():
    data = request.get_json()
    result = run_lca(
        data["material"],
        data["process_type"],
        data["energy"],
        float(data["quantity"])
    )
    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)
