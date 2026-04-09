#!/usr/bin/env python3
"""
This module contains an async routine that spawns wait_random n times.
"""
import asyncio
from typing import List

# Import using __import__ as specified in the previous tasks' style
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawns wait_random n times with the specified max_delay.

    Args:
        n (int): The number of times to spawn wait_random.
        max_delay (int): The maximum delay for each wait_random.

    Returns:
        List[float]: List of all the delays in ascending order.
    """
    delays: List[float] = []
    tasks: List[asyncio.Task] = []

    # Create n tasks
    for _ in range(n):
        tasks.append(asyncio.create_task(wait_random(max_delay)))

    # Use as_completed to get results in the order they finish
    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)

    return delays
