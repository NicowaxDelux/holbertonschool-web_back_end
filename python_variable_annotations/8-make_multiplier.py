#!/usr/bin/env python3
"""
type-annotated function make_multiplier that takes a float multiplier
as argument and returns a function that multiplies a float by multiplier.
"""

import typing


def make_multiplier(multiplier: float) -> typing.Callable[[float], float]:
    """
    Parameter:
    float: multiplier

    Return:
    function that multiplies a float by multiplier.
    """
    def multiplier_funtion(value: float) -> float:
        return value * multiplier

    return multiplier_funtion
