#!/usr/bin/env python3
"""
Run time for four parallel comprehensions
"""


import time
from asyncio import gather
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    measure_runtime should measure the total runtime and return it.
    """
    star_time = time.time()

    results = await gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension())

    end_time = time.time()

    total_time = end_time - star_time

    return total_time
