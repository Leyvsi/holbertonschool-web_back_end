#!/usr/bin/env python3
"""
This module provides a function that returns a multiplier function.
"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Creates a function that multiplies a float by a given multiplier.

    Args:
        multiplier (float): The multiplier to be used.

    Returns:
        Callable[[float], float]: A function that takes a float and
        returns a float.
    """
    def multiplier_func(n: float) -> float:
        """
        Multiplies a number by the multiplier defined in the outer scope.
        """
        return n * multiplier

    return multiplier_func
