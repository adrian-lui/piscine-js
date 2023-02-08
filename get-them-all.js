"use strict";

export const getArchitects = () => {
    const arr1 = []
    const arr2 = []
    for (const ele of document.getElementsByTagName("a")) {
        arr1.push(ele)
    }
    for (const ele of document.getElementsByTagName("span")) {
        arr2.push(ele)
    }
    return [arr1, arr2]
}

export const getClassical = () => {
    const arr1 = []
    const arr2 = []
    for (const ele of getArchitects()[0]) {
        ele.classList.contains("classical")? arr1.push(ele):arr2.push(ele)
    }
    return [arr1, arr2]
}

export const getActive = () => {
    const arr1 = []
    const arr2 = []
    for (const ele of getClassical()[0]) {
        ele.classList.contains("active")? arr1.push(ele):arr2.push(ele)
    }
    return [arr1, arr2]
}

export const getBonannoPisano = () => {
    let bonanno;
    const arr = []
    for (const ele of getActive()[0]) {
        ele.id === "BonannoPisano"? bonanno = ele: arr.push(ele)
    }
    return [bonanno, arr]
}