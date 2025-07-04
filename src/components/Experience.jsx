import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="bg-gray-100 py-12 px-6 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-12">
          <Briefcase className="inline-block w-6 h-6 mr-2" />
          Experience
        </h2>

        <div className="relative border-l-4 border-purple-600 pl-6 space-y-12">
          {[
            {
              title: "AI Intern | Microsoft AICTE Internship",
              org: "Edunet Foundation",
              duration: "Apr 2025 - May 2025 · Remote",
              points: [
                "Completed a 4-week internship on 'Foundations of AI' by Microsoft & AICTE.",
                "Built a Spam Email Detector using TensorFlow with core AI/ML and NLP concepts.",
                "Hands-on with Jupyter Notebook, scikit-learn, NumPy, and Pandas.",
              ],
            },
            {
              title: "Infosys Springboard Intern 5.0 (Python Domain)",
              duration: "Oct 2024 - Dec 2024 · Remote",
              points: [
                "Built a Bank Cheque Extraction System using Python, Streamlit, PostgreSQL, and Gemini OCR.",
                "Designed modular architecture and workflows to streamline cheque data extraction.",
                "Completed KT sessions, milestone reviews, and final demo delivery.",
                "Cleared 4 milestones in 8 weeks with strong outputs and active participation.",
                "Implemented dashboards, data export, and automation improvements for speed and accuracy.",
              ],
            },
            {
              title: "Google Cloud Arcade Contributor",
              duration: "Oct 2024 - Nov 2024 · Remote",
              points: [
                "Achieved Silver League with 5,250 points and earned multiple badges.",
                "Earned badges for Arcade Base Camp, Diwali, and Trivia challenges (Nov 2024).",
                "Completed hands-on labs, MCQs, and timed challenges on Google Cloud.",
                'Profile: <a href="https://www.cloudskillsboost.google/public_profiles/6aee48e3-38ee-4fc7-9acf-7e653e3b05a9" class="underline text-purple-500" target="_blank">View Profile</a>',
              ],
            },
            {
              title: "Contributor | GirlScript Summer of Code",
              duration: "Oct 2024 - Nov 2024 · Remote",
              points: [
                "Ranked 154 out of 3000+ contributors with a score of 1255 in GSSoC.",
                "Merged 9 pull requests across 10 open-source projects with consistent code quality.",
                "Earned 8 badges for active contributions across Levels 1, 2, and 3.",
                "Participated in the Postman API Challenge, enhancing API and frontend development skills.",
                "Designed and optimized frontend components using HTML, CSS, and JavaScript to improve user experience.",
              ],
            },
            {
              title: "Contributor | Hacktoberfest",
              duration: "Oct 2024 · Remote",
              points: [
                "Earned badges for levels Registered to Level 4 on the platform.",
                "Collaborated on impactful open-source projects, improving teamwork and code quality.",
                "Engaged in community discussions and received mentorship from experienced developers.",
                "Developed front-end components using HTML, CSS, and JavaScript.",
                "Enhanced UI/UX with responsive and user-friendly design elements.",
              ],
            },
            {
              title: "Frontend Engineering Simulation | Skyscanner (Forage)",
              duration: "Jul 2024 · Remote",
              points: [
                "Skyscanner Front-End Software Engineering virtual experience programme on Forage - July 2024",
                "Completed a job simulation where I built a web application using React as a front-end engineer at Skyscanner.",
                "Developed a page for picking a travel date using Skyscanner’s open-source Backpack React library.",
                "Customised my application and ran automated tests to ensure it rendered properly.",
              ],
            },
          ].map((exp, idx) => (
            <div key={idx} className="relative">
              {/* Dot */}
              <div className="absolute -left-[10px] top-2 w-5 h-5 bg-purple-600 rounded-full border-4 border-white"></div>

              {/* Card */}
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                {exp.org && <p className="text-sm text-gray-500">{exp.org}</p>}
                <p className="text-sm text-gray-500">{exp.duration}</p>
                <ul className="list-disc list-inside mt-3 space-y-1 text-gray-700">
                  {exp.points.map((point, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: point }} />
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
