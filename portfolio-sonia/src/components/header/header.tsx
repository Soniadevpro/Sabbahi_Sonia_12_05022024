

const header = () => {
  const scrollToSkills = () => {
    const skillsSection = document.getElementById('skills-section');
    if (skillsSection) {
        skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
};
    return (
        <div>
             <header>
      <div className ="navbar">
        <ul>
          <li>0.Home</li>
          <li><button onClick={scrollToSkills}>1.Skills</button></li>
          <li>2.Projects</li>
          <li>3.Courses</li>
          <li>4.Contact</li>
        </ul>
      </div>
    </header>
        </div>
    );
};

export default header;