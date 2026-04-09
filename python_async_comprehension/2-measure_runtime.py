#!/usr/bin/env python3
"""
This module measures the runtime of executing async comprehensions in parallel.
"""
import asyncio
import time

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Executes async_comprehension four times in parallel and measures
    the total execution time.

    Returns:
        float: The total runtime in seconds.
    """
    start_time = time.perf_counter()

    # Exécution des 4 coroutines en parallèle
    await asyncio.gather(*(async_comprehension() for _ in range(4)))

    end_time = time.perf_counter()
    return end_time - start_time
