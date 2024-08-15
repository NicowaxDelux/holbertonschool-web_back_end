#!/usr/bin/env python3
"""
type-annotated function sum_list which takes a list input_list
of floats as argument and returns their sum as a float.
"""


import typing


def sum_list(input_list: typing.List[float]) -> float:
    """
    parameters:
    input_list: float

    Returns:
    float: sum as a float.
    """
    return sum(input_list)
