interface ReactIconProps {
  size?: string | number;
  color?: string;
  className?: string;
  style?: import('react').CSSProperties;
  title?: string;
}

declare module 'react-icons/fi' {
  import { ComponentType } from 'react';

  export const FiDownload: ComponentType<ReactIconProps>;
  export const FiMail: ComponentType<ReactIconProps>;
  export const FiArrowRight: ComponentType<ReactIconProps>;
  export const FiSun: ComponentType<ReactIconProps>;
  export const FiMoon: ComponentType<ReactIconProps>;
  export const FiMenu: ComponentType<ReactIconProps>;
  export const FiX: ComponentType<ReactIconProps>;
  export const FiGlobe: ComponentType<ReactIconProps>;
  export const FiPhone: ComponentType<ReactIconProps>;
  export const FiLinkedin: ComponentType<ReactIconProps>;
  export const FiMapPin: ComponentType<ReactIconProps>;
  export const FiSend: ComponentType<ReactIconProps>;
  export const FiBook: ComponentType<ReactIconProps>;
  export const FiCalendar: ComponentType<ReactIconProps>;
  export const FiExternalLink: ComponentType<ReactIconProps>;
  export const FiGithub: ComponentType<ReactIconProps>;
}

declare module 'react-icons/fa' {
  import { ComponentType } from 'react';

  export const FaWhatsapp: ComponentType<ReactIconProps>;
  export const FaJava: ComponentType<ReactIconProps>;
  export const FaDatabase: ComponentType<ReactIconProps>;
}

declare module 'react-icons/si' {
  import { ComponentType } from 'react';

  export const SiPython: ComponentType<ReactIconProps>;
  export const SiDjango: ComponentType<ReactIconProps>;
  export const SiFastapi: ComponentType<ReactIconProps>;
  export const SiFlask: ComponentType<ReactIconProps>;
  export const SiJavascript: ComponentType<ReactIconProps>;
  export const SiReact: ComponentType<ReactIconProps>;
  export const SiTypescript: ComponentType<ReactIconProps>;
  export const SiDocker: ComponentType<ReactIconProps>;
  export const SiKubernetes: ComponentType<ReactIconProps>;
  export const SiGit: ComponentType<ReactIconProps>;
  export const SiLinux: ComponentType<ReactIconProps>;
  export const SiJenkins: ComponentType<ReactIconProps>;
  export const SiTensorflow: ComponentType<ReactIconProps>;
  export const SiApachespark: ComponentType<ReactIconProps>;
  export const SiApachekafka: ComponentType<ReactIconProps>;
  export const SiRedis: ComponentType<ReactIconProps>;
  export const SiMongodb: ComponentType<ReactIconProps>;
  export const SiPostgresql: ComponentType<ReactIconProps>;
  export const SiFirebase: ComponentType<ReactIconProps>;
}
