type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "XR Developer | Unity • Unreal • Web",
    fullName: "Charanjeet Singh Jaswani",
    email: "charanjeetjaswani@gmail.com",
  },
  hero: {
    name: "Charanjeet Singh",
    p: [
      "I build immersive AR/VR experiences,",
      "tools, shaders, and gameplay systems in Unity.",
    ],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm a Unity Game Developer with 5+ years of experience specializing in AR, VR, and MR applications. My expertise spans gameplay programming, performance optimization, shader development, and custom tool creation. I’ve led and contributed to projects involving haptic feedback, real-time 3D visualization, historical city tours in VR, and educational simulations. I'm passionate about solving technical challenges and building scalable, immersive experiences using Unity, C#, and real-time graphics techniques.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `These projects showcase my skills in Unity development across AR, VR, MR, and PC platforms. Each project reflects my capability in system design, performance tuning, tool programming, and collaboration with cross-functional teams. You'll find real-world examples with code, demos, and technical insights.`,
    },
  },
};

