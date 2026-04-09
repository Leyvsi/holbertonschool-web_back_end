#!/usr/bin/env python3
"""
This module provides a function to sum a list of floats.
"""
from typing import List


def sum_list(input_list: List[float]) -> float:
    """
    Takes a list of floats and returns their sum.

    Args:
        input_list (List[float]): A list containing float numbers.

    Returns:
        float: The sum of the elements in the list.
    """
    return sum(input_list)
