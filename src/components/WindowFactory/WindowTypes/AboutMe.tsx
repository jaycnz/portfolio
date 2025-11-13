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
          <h2 className="text-xl font-bold">About Me</h2>
          <p className="text-sm text-left text-gray-700 dark:text-gray-300">
            Hi, I'm Jay- I’m a design and computer science student, interested in sports design, game design, and game development with a focus on storytelling and visual experiences. I
            love creating visuals and experiences that connect people and foster a sense of belonging. My goal is to design experiences that bring people together, to make them feel a part of something bigger.
            <br/>
            <br/>
            In my free time, I enjoy playing basketball, music, video games, and creating posters/digital art. You can find some of my work in the other folders on this website.
            <br/>
            <br/>
            jaycnz1023@gmail.com
            <br/>
            <a href="https://www.linkedin.com/in/jay-chen-535201270/" className="Link" target="_blank">LinkedIn</a>
            <br/>
            <a href="https://www.instagram.com/jayc.blend/" className="Link" target="_blank">Instagram</a></p>
        </div>
      </div>
    );
  }
  