import React from 'react';

export default function ResumePage() {
  return (
    <div className="min-h-screen w-full bg-black">
      <iframe
        src="/resume/resume.pdf"
        title="Resume"
        className="h-screen w-full border-0"
      />
    </div>
  );
}
