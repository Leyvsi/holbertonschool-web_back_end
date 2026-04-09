#!/usr/bin/env python3
"""
This module provides a function that converts a string and a number to a tuple.
"""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Returns a tuple with a string and the square of a number as a float.

    Args:
        k (str): The string key.
        v (Union[int, float]): The value to be squared.

    Returns:
        Tuple[str, float]: A tuple containing k and the square of v.
    """
    return (k, float(v ** 2))
