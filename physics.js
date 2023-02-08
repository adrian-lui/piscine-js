"use strict";

/*
a = F/m
a = Δv/Δt
a = 2d/t^2

a = acceleration
m = mass
F = force
Δv = final velocity - initial velocity
Δt = final time - initial time
d = distance
t = time
*/

function getAcceleration(x) {
    if (x.f && x.m) {
        return x.f/x.m;
    };
    if (x.Δv && x.Δt) {
        return x.Δv/x.Δt;
    };
    if (x.d && x.t) {
        return 2*x.d/x.t/x.t;
    };
    return "impossible";
}