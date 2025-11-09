// src/components/WindowTypes/AboutMe.tsx
export function AboutMe() {
    return (
      <div className="flex flex-col items-center p-4 space-y-4">
        <img
          src="/images/profile.jpg"
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover shadow-md"
        />
  
        {/* Text / "blog post" */}
        <div className="text-center space-y-2">
          <h2 className="text-xl font-bold">Hi, I’m Jay</h2>
          <p className="text-sm text-left text-gray-700 dark:text-gray-300">
            I’m a designer and developer blah blah blah blah blah blah blah blah
            blah blah blah blah blah blah blah blah blah blah blah blah blah blah
            blah blah blah blah blah blah blah blah blah blah blah blah blah blah
            blah blah blah.
          </p>
        </div>
      </div>
    );
  }
  