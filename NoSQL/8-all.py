#!/usr/bin/env python3
"""
Module for task 8: Listing all documents in a collection using PyMongo.
"""


def list_all(mongo_collection):
    """
    Lists all documents in a MongoDB collection.

    :param mongo_collection: A pymongo collection object.
    :return: A list of all documents, or an empty list if none are found.
    """
    # Find all documents in the collection and convert the cursor to a list
    return list(mongo_collection.find())

