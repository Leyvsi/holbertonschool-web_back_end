#!/usr/bin/env python3
"""
Module for task 11: Finding documents by specific topic using PyMongo.
"""


def schools_by_topic(mongo_collection, topic):
    """
    Returns a list of schools having a specific topic.

    :param mongo_collection: A pymongo collection object.
    :param topic: The topic string to search for within the topics array.
    :return: A list of documents that match the specific topic.
    """
    # Query the collection for documents where the topic exists in the array
    return list(mongo_collection.find({"topics": topic}))

