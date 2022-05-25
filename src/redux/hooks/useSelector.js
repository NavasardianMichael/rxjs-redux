import { useContext, useEffect, useState } from "react";
import { Observable } from "rxjs";
import { Context } from "../core/Provider";
import { useStore } from "./useStore";

export function useSelector(callback) {
    let currentStore = useStore()
    return callback(currentStore.getState())
}