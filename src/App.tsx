import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import HackathonF25 from "./components/HackathonF25/Hackathon";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HackathonF25 />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    );
}
