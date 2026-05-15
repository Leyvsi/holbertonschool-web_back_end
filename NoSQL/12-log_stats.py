#!/usr/bin/env python3
"""
Module for task 12: Providing stats about Nginx logs stored in MongoDB.
"""
from pymongo import MongoClient


def log_stats():
    """
    Connects to the MongoDB instance and displays stats about Nginx logs.
    """
    # Connect to the MongoDB server and target logs database -> nginx collection
    client = MongoClient('mongodb://127.0.0.1:27017')
    nginx_collection = client.logs.nginx

    # 1. Total number of logs
    total_logs = nginx_collection.count_documents({})
    print(f"{total_logs} logs")

    # 2. Methods stats
    print("Methods:")
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for method in methods:
        count = nginx_collection.count_documents({"method": method})
        print(f"\tmethod {method}: {count}")

    # 3. Specific status check logs (method=GET, path=/status)
    status_checks = nginx_collection.count_documents(
        {"method": "GET", "path": "/status"}
    )
    print(f"{status_checks} status check")


if __name__ == "__main__":
    log_stats()

