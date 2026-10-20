import React from 'react';
import { Link, Outlet } from 'react-router-dom';
function StudentProfile() {
return (
<div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow
border border-gray-200">
<h2 className="text-xl font-bold text-purple-800 mb-2">Student
Portal: Rahul Patel</h2>
<p className="text-xs text-gray-500 mb-4">Roll No:
BCA-2026-45</p>
{/* Sub Menu Links */}
<div className="flex space-x-3 border-b pb-2 mb-3">
<Link to="marks" className="text-sm text-purple-600
hover:underline font-semibold">
View Marks
</Link>
<span className="text-gray-300">|</span>
<Link to="attendance" className="text-sm text-purple-600
hover:underline font-semibold">
View Attendance

</Link>
</div>
{/* Dynamic Sub Route Output Rendered Here */}
<Outlet />
</div>
);
}
export default StudentProfile;