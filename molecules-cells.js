"use strict";

/*
Create two functions which accept a string, and return a string:

RNA: that converts a DNA strand into its compliment RNA strand.
DNA: that converts an RNA strand into its compliment DNA strand.
Compliments:

DNA | RNA
 G  -  C
 C  -  G
 T  -  A
 A  -  U
Each strand must be represented as upper case string, without spaces, eg: "ATCG" is a valid DNA strand.
*/
function RNA(x) {
    let y = ""
    for (let i = 0; i < x.length; i++) {
        switch (x[i]) {
            case "G":
                y += "C";
                break;
            case "C":
                y += "G";
                break;
            case "T":
                y += "A";
                break;
            case "A":
                y += "U";
                break;
        }
    }
    return y;
}

function DNA(x) {
    let y = ""
    for (let i = 0; i < x.length; i++) {
        switch (x[i]) {
            case "C":
                y += "G";
                break;
            case "G":
                y += "C";
                break;
            case "A":
                y += "T";
                break;
            case "U":
                y += "A";
                break;
        }
    }
    return y;
}