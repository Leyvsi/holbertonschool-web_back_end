#!/usr/bin/env python3
"""
Module for task 9: Inserting a document into a collection using PyMongo.
"""


def insert_school(mongo_collection, **kwargs):
    """
    Inserts a new document in a MongoDB collection based on kwargs.

    :param mongo_collection: A pymongo collection object.
    :param kwargs: Key-value pairs representing the attributes of the document.
    :return: The new _id of the inserted document.
    """
    # Insert the kwargs dictionary directly into the collection
    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id

