import { config } from "./firebase-config";
import { FirebaseApp, getApps, initializeApp } from "firebase/app";

let app = null;

if (getApps().length == 0) {
    app = initializeApp(config);
}

export default app; 