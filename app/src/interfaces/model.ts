import { Printable } from "../utils/printable.js";
import { Comparator } from "./comparator.js";

export interface Model<T> extends Printable, Comparator<T> {
    
}