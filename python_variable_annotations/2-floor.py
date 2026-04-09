#!/usr/bin/env python3
"""
This module provides a type-annotated function to calculate the floor.
"""
import math


def floor(n: float) -> int:
    """
    Takes a float and returns its floor as an integer.

    Args:
        n (float): The float number to floor.

    Returns:
        int: The largest integer less than or equal to n.
    """
    return math.floor(n)
