from fastapi import FastAPI,HTTPException
from fastapi.staticfiles import StaticFiles
from pyspark.sql import SparkSession
import pandas as pd


spark = SparkSession.builder.appName("6242").getOrCreate()

app = FastAPI()

@app.get("/api/v1/data")
def get_data_csv(source, header=True, inferSchema=True, multiLine=True):
    try:
        df = spark.read.csv(path=source, header=header, inferSchema=inferSchema, multiLine=multiLine)
        pdf = df.toPandas()
        print(pdf.head())
        return pdf.to_dict(orient="records")
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

app.mount("/", StaticFiles(directory=".",html=True), name="static")
