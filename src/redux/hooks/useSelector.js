import { useContext, useEffect, useState } from "react";
import { Observable } from "rxjs";
import { Context } from "../core/Provider";

export function useSelector(callback) {
    let [currentStore] = useContext(Context)
    return callback(currentStore.getState())
}