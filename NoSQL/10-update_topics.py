#!/usr/bin/env python3
"""
Module for task 10: Updating document topics in a collection using PyMongo.
"""


def update_topics(mongo_collection, name, topics):
    """
    Changes all topics of a school document based on the name.

    :param mongo_collection: A pymongo collection object.
    :param name: The school name (string) to search for and update.
    :param topics: The list of topics (list of strings) approached in the school.
    :return: The result of the update operation.
    """
    # Update all documents matching the name with the new topics list
    return mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )

