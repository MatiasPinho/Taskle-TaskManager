interface SvgProps extends React.SVGProps<SVGSVGElement> {}

export const Dashboard: React.FC<SvgProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.25 4C3.25 3.58579 3.58579 3.25 4 3.25H10C10.4142 3.25 10.75 3.58579 10.75 4V12C10.75 12.4142 10.4142 12.75 10 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12V4ZM4.75 4.75V11.25H9.25V4.75H4.75Z"
        fill="#D0D0D0"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.25 16C3.25 15.5858 3.58579 15.25 4 15.25H10C10.4142 15.25 10.75 15.5858 10.75 16V20C10.75 20.4142 10.4142 20.75 10 20.75H4C3.58579 20.75 3.25 20.4142 3.25 20V16ZM4.75 16.75V19.25H9.25V16.75H4.75Z"
        fill="#D0D0D0"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.25 12C13.25 11.5858 13.5858 11.25 14 11.25H20C20.4142 11.25 20.75 11.5858 20.75 12V20C20.75 20.4142 20.4142 20.75 20 20.75H14C13.5858 20.75 13.25 20.4142 13.25 20V12ZM14.75 12.75V19.25H19.25V12.75H14.75Z"
        fill="#D0D0D0"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.25 4C13.25 3.58579 13.5858 3.25 14 3.25H20C20.4142 3.25 20.75 3.58579 20.75 4V8C20.75 8.41421 20.4142 8.75 20 8.75H14C13.5858 8.75 13.25 8.41421 13.25 8V4ZM14.75 4.75V7.25H19.25V4.75H14.75Z"
        fill="#D0D0D0"
      />
    </svg>
  );
};

export const Projects: React.FC<SvgProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 4.75C8.66848 4.75 8.35054 4.8817 8.11612 5.11612C7.8817 5.35054 7.75 5.66848 7.75 6V15C7.75 15.3315 7.8817 15.6495 8.11612 15.8839C8.35054 16.1183 8.66848 16.25 9 16.25H19C19.3315 16.25 19.6495 16.1183 19.8839 15.8839C20.1183 15.6495 20.25 15.3315 20.25 15V8C20.25 7.66848 20.1183 7.35054 19.8839 7.11612C19.6495 6.8817 19.3315 6.75 19 6.75H14C13.8011 6.75 13.6103 6.67098 13.4697 6.53033L11.6893 4.75H9ZM7.05546 4.05546C7.57118 3.53973 8.27065 3.25 9 3.25H12C12.1989 3.25 12.3897 3.32902 12.5303 3.46967L14.3107 5.25H19C19.7293 5.25 20.4288 5.53973 20.9445 6.05546C21.4603 6.57118 21.75 7.27065 21.75 8V15C21.75 15.7293 21.4603 16.4288 20.9445 16.9445C20.4288 17.4603 19.7293 17.75 19 17.75H9C8.27065 17.75 7.57118 17.4603 7.05546 16.9445C6.53973 16.4288 6.25 15.7293 6.25 15V6C6.25 5.27065 6.53973 4.57118 7.05546 4.05546Z"
        fill="#D0D0D0"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 8.75C4.66848 8.75 4.35054 8.8817 4.11612 9.11612C3.8817 9.35054 3.75 9.66848 3.75 10V19C3.75 19.3315 3.8817 19.6495 4.11612 19.8839C4.35054 20.1183 4.66848 20.25 5 20.25H15C15.3315 20.25 15.6495 20.1183 15.8839 19.8839C16.1183 19.6495 16.25 19.3315 16.25 19V17C16.25 16.5858 16.5858 16.25 17 16.25C17.4142 16.25 17.75 16.5858 17.75 17V19C17.75 19.7293 17.4603 20.4288 16.9445 20.9445C16.4288 21.4603 15.7293 21.75 15 21.75H5C4.27065 21.75 3.57118 21.4603 3.05546 20.9445C2.53973 20.4288 2.25 19.7293 2.25 19V10C2.25 9.27065 2.53973 8.57118 3.05546 8.05546C3.57118 7.53973 4.27065 7.25 5 7.25H7C7.41421 7.25 7.75 7.58579 7.75 8C7.75 8.41421 7.41421 8.75 7 8.75H5Z"
        fill="#D0D0D0"
      />
    </svg>
  );
};

export const Task: React.FC<SvgProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.03033 3.96967C8.32322 4.26256 8.32322 4.73744 8.03033 5.03033L5.53033 7.53033C5.23744 7.82322 4.76256 7.82322 4.46967 7.53033L2.96967 6.03033C2.67678 5.73744 2.67678 5.26256 2.96967 4.96967C3.26256 4.67678 3.73744 4.67678 4.03033 4.96967L5 5.93934L6.96967 3.96967C7.26256 3.67678 7.73744 3.67678 8.03033 3.96967Z"
        fill="#1e293b"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.03033 9.96967C8.32322 10.2626 8.32322 10.7374 8.03033 11.0303L5.53033 13.5303C5.23744 13.8232 4.76256 13.8232 4.46967 13.5303L2.96967 12.0303C2.67678 11.7374 2.67678 11.2626 2.96967 10.9697C3.26256 10.6768 3.73744 10.6768 4.03033 10.9697L5 11.9393L6.96967 9.96967C7.26256 9.67678 7.73744 9.67678 8.03033 9.96967Z"
        fill="#1e293b"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.03033 15.9697C8.32322 16.2626 8.32322 16.7374 8.03033 17.0303L5.53033 19.5303C5.23744 19.8232 4.76256 19.8232 4.46967 19.5303L2.96967 18.0303C2.67678 17.7374 2.67678 17.2626 2.96967 16.9697C3.26256 16.6768 3.73744 16.6768 4.03033 16.9697L5 17.9393L6.96967 15.9697C7.26256 15.6768 7.73744 15.6768 8.03033 15.9697Z"
        fill="#1e293b"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.25 6C10.25 5.58579 10.5858 5.25 11 5.25H20C20.4142 5.25 20.75 5.58579 20.75 6C20.75 6.41421 20.4142 6.75 20 6.75H11C10.5858 6.75 10.25 6.41421 10.25 6Z"
        fill="#1e293b"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.25 12C10.25 11.5858 10.5858 11.25 11 11.25H20C20.4142 11.25 20.75 11.5858 20.75 12C20.75 12.4142 20.4142 12.75 20 12.75H11C10.5858 12.75 10.25 12.4142 10.25 12Z"
        fill="#1e293b"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.25 18C10.25 17.5858 10.5858 17.25 11 17.25H20C20.4142 17.25 20.75 17.5858 20.75 18C20.75 18.4142 20.4142 18.75 20 18.75H11C10.5858 18.75 10.25 18.4142 10.25 18Z"
        fill="#1e293b"
      />
    </svg>
  );
};

export const Calendar: React.FC<SvgProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 5.75C5.66848 5.75 5.35054 5.8817 5.11612 6.11612C4.8817 6.35054 4.75 6.66848 4.75 7V19C4.75 19.3315 4.8817 19.6495 5.11612 19.8839C5.35054 20.1183 5.66848 20.25 6 20.25H11.5C11.9142 20.25 12.25 20.5858 12.25 21C12.25 21.4142 11.9142 21.75 11.5 21.75H6C5.27065 21.75 4.57118 21.4603 4.05546 20.9445C3.53973 20.4288 3.25 19.7293 3.25 19V7C3.25 6.27065 3.53973 5.57118 4.05546 5.05546C4.57118 4.53973 5.27065 4.25 6 4.25H18C18.7293 4.25 19.4288 4.53973 19.9445 5.05546C20.4603 5.57118 20.75 6.27065 20.75 7V13C20.75 13.4142 20.4142 13.75 20 13.75C19.5858 13.75 19.25 13.4142 19.25 13V7C19.25 6.66848 19.1183 6.35054 18.8839 6.11612C18.6495 5.8817 18.3315 5.75 18 5.75H6Z"
        fill="#D0D0D0"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 2.25C16.4142 2.25 16.75 2.58579 16.75 3V7C16.75 7.41421 16.4142 7.75 16 7.75C15.5858 7.75 15.25 7.41421 15.25 7V3C15.25 2.58579 15.5858 2.25 16 2.25Z"
        fill="#D0D0D0"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 2.25C8.41421 2.25 8.75 2.58579 8.75 3V7C8.75 7.41421 8.41421 7.75 8 7.75C7.58579 7.75 7.25 7.41421 7.25 7V3C7.25 2.58579 7.58579 2.25 8 2.25Z"
        fill="#D0D0D0"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.25 11C3.25 10.5858 3.58579 10.25 4 10.25H20C20.4142 10.25 20.75 10.5858 20.75 11C20.75 11.4142 20.4142 11.75 20 11.75H4C3.58579 11.75 3.25 11.4142 3.25 11Z"
        fill="#D0D0D0"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.5303 16.4697C21.8232 16.7626 21.8232 17.2374 21.5303 17.5303L17.5303 21.5303C17.2374 21.8232 16.7626 21.8232 16.4697 21.5303L14.4697 19.5303C14.1768 19.2374 14.1768 18.7626 14.4697 18.4697C14.7626 18.1768 15.2374 18.1768 15.5303 18.4697L17 19.9393L20.4697 16.4697C20.7626 16.1768 21.2374 16.1768 21.5303 16.4697Z"
        fill="#D0D0D0"
      />
    </svg>
  );
};

export const Plus: React.FC<SvgProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        d="M7.99983 5.55164V10.4359"
        stroke="#94A3B8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.4443 7.99367H5.55542"
        stroke="#94A3B8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.1237 1.33337H4.87611C2.69833 1.33337 1.33325 2.87476 1.33325 5.05681V10.9433C1.33325 13.1253 2.69198 14.6667 4.87611 14.6667H11.1237C13.3079 14.6667 14.6666 13.1253 14.6666 10.9433V5.05681C14.6666 2.87476 13.3079 1.33337 11.1237 1.33337Z"
        stroke="#94A3B8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Search: React.FC<SvgProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_3_567)">
        <path
          d="M3 10C3 10.9193 3.18106 11.8295 3.53284 12.6788C3.88463 13.5281 4.40024 14.2997 5.05025 14.9497C5.70026 15.5998 6.47194 16.1154 7.32122 16.4672C8.1705 16.8189 9.08075 17 10 17C10.9193 17 11.8295 16.8189 12.6788 16.4672C13.5281 16.1154 14.2997 15.5998 14.9497 14.9497C15.5998 14.2997 16.1154 13.5281 16.4672 12.6788C16.8189 11.8295 17 10.9193 17 10C17 9.08075 16.8189 8.1705 16.4672 7.32122C16.1154 6.47194 15.5998 5.70026 14.9497 5.05025C14.2997 4.40024 13.5281 3.88463 12.6788 3.53284C11.8295 3.18106 10.9193 3 10 3C9.08075 3 8.1705 3.18106 7.32122 3.53284C6.47194 3.88463 5.70026 4.40024 5.05025 5.05025C4.40024 5.70026 3.88463 6.47194 3.53284 7.32122C3.18106 8.1705 3 9.08075 3 10Z"
          stroke="#FCFF5D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 21L15 15"
          stroke="#FCFF5D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_3_567">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const ArrowBack: React.FC<SvgProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.53033 5.46967C9.82322 5.76256 9.82322 6.23744 9.53033 6.53033L6.06066 10L9.53033 13.4697C9.82322 13.7626 9.82322 14.2374 9.53033 14.5303C9.23744 14.8232 8.76256 14.8232 8.46967 14.5303L4.46967 10.5303C4.17678 10.2374 4.17678 9.76256 4.46967 9.46967L8.46967 5.46967C8.76256 5.17678 9.23744 5.17678 9.53033 5.46967Z"
        fill="#1E293B"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.25 10C4.25 9.58579 4.58579 9.25 5 9.25H16C17.2598 9.25 18.468 9.75044 19.3588 10.6412C20.2496 11.532 20.75 12.7402 20.75 14C20.75 15.2598 20.2496 16.468 19.3588 17.3588C18.468 18.2496 17.2598 18.75 16 18.75H15C14.5858 18.75 14.25 18.4142 14.25 18C14.25 17.5858 14.5858 17.25 15 17.25H16C16.862 17.25 17.6886 16.9076 18.2981 16.2981C18.9076 15.6886 19.25 14.862 19.25 14C19.25 13.138 18.9076 12.3114 18.2981 11.7019C17.6886 11.0924 16.862 10.75 16 10.75H5C4.58579 10.75 4.25 10.4142 4.25 10Z"
        fill="#1E293B"
      />
    </svg>
  );
};

export const Notification: React.FC<SvgProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0001 3.75C11.6685 3.75 11.3506 3.8817 11.1162 4.11612C10.8818 4.35054 10.7501 4.66848 10.7501 5C10.7501 5.29002 10.5829 5.55405 10.3207 5.67802C9.29531 6.16287 8.42121 6.9176 7.79206 7.86133C7.16607 8.80031 6.80605 9.89117 6.75007 11.0181V14C6.75007 14.0301 6.74825 14.0602 6.74463 14.0901C6.65527 14.8284 6.39381 15.5354 5.98129 16.1542C5.9598 16.1864 5.93793 16.2183 5.91569 16.25H18.0844C18.0622 16.2183 18.0403 16.1864 18.0188 16.1542C17.6063 15.5354 17.3449 14.8284 17.2555 14.0901C17.2519 14.0602 17.2501 14.0301 17.2501 14V11.0181C17.1941 9.89118 16.8341 8.80031 16.2081 7.86133C15.5789 6.9176 14.7048 6.16287 13.6795 5.67802C13.4173 5.55405 13.2501 5.29002 13.2501 5C13.2501 4.66848 13.1184 4.35054 12.884 4.11612C12.6495 3.8817 12.3316 3.75 12.0001 3.75ZM10.0555 3.05546C10.5713 2.53973 11.2707 2.25 12.0001 2.25C12.7294 2.25 13.4289 2.53973 13.9446 3.05546C14.3454 3.45621 14.6097 3.96791 14.7076 4.51836C15.8123 5.11853 16.7564 5.97962 17.4562 7.02927C18.2363 8.1995 18.6833 9.55995 18.7492 10.9648C18.7498 10.9765 18.7501 10.9883 18.7501 11V13.9524C18.8159 14.4422 18.9926 14.9106 19.2669 15.3221C19.5492 15.7455 19.9269 16.0966 20.3696 16.3474C20.666 16.5152 20.8121 16.8617 20.7253 17.1911C20.6385 17.5205 20.3407 17.75 20.0001 17.75H4.00007C3.65945 17.75 3.36161 17.5205 3.27482 17.1911C3.18804 16.8617 3.33411 16.5152 3.6305 16.3474C4.07327 16.0966 4.45097 15.7455 4.73322 15.3221C5.00753 14.9106 5.18422 14.4422 5.25007 13.9524V11C5.25007 10.9883 5.25034 10.9765 5.25089 10.9648C5.31684 9.55995 5.76383 8.1995 6.54398 7.02927C7.24375 5.97962 8.18789 5.11853 9.29256 4.51836C9.39049 3.96791 9.65478 3.45621 10.0555 3.05546Z"
        fill="#D0D0D0"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 16.25C9.41421 16.25 9.75 16.5858 9.75 17V18C9.75 18.5967 9.98705 19.169 10.409 19.591C10.831 20.0129 11.4033 20.25 12 20.25C12.5967 20.25 13.169 20.0129 13.591 19.591C14.0129 19.169 14.25 18.5967 14.25 18V17C14.25 16.5858 14.5858 16.25 15 16.25C15.4142 16.25 15.75 16.5858 15.75 17V18C15.75 18.9946 15.3549 19.9484 14.6517 20.6517C13.9484 21.3549 12.9946 21.75 12 21.75C11.0054 21.75 10.0516 21.3549 9.34835 20.6517C8.64509 19.9484 8.25 18.9946 8.25 18V17C8.25 16.5858 8.58579 16.25 9 16.25Z"
        fill="#D0D0D0"
      />
    </svg>
  );
};

export const Users: React.FC<SvgProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.64124 3.64124C6.53204 2.75044 7.74022 2.25 9 2.25C10.2598 2.25 11.468 2.75044 12.3588 3.64124C13.2496 4.53204 13.75 5.74022 13.75 7C13.75 8.25978 13.2496 9.46796 12.3588 10.3588C11.468 11.2496 10.2598 11.75 9 11.75C7.74022 11.75 6.53204 11.2496 5.64124 10.3588C4.75044 9.46796 4.25 8.25978 4.25 7C4.25 5.74022 4.75044 4.53204 5.64124 3.64124ZM9 3.75C8.13805 3.75 7.3114 4.09241 6.7019 4.7019C6.09241 5.3114 5.75 6.13805 5.75 7C5.75 7.86195 6.09241 8.6886 6.7019 9.2981C7.3114 9.90759 8.13805 10.25 9 10.25C9.86195 10.25 10.6886 9.90759 11.2981 9.2981C11.9076 8.6886 12.25 7.86195 12.25 7C12.25 6.13805 11.9076 5.3114 11.2981 4.7019C10.6886 4.09241 9.86195 3.75 9 3.75Z"
        fill="#D0D0D0"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 15.75C6.13805 15.75 5.3114 16.0924 4.7019 16.7019C4.09241 17.3114 3.75 18.138 3.75 19V21C3.75 21.4142 3.41421 21.75 3 21.75C2.58579 21.75 2.25 21.4142 2.25 21V19C2.25 17.7402 2.75044 16.532 3.64124 15.6412C4.53204 14.7504 5.74022 14.25 7 14.25H11C12.2598 14.25 13.468 14.7504 14.3588 15.6412C15.2496 16.532 15.75 17.7402 15.75 19V21C15.75 21.4142 15.4142 21.75 15 21.75C14.5858 21.75 14.25 21.4142 14.25 21V19C14.25 18.138 13.9076 17.3114 13.2981 16.7019C12.6886 16.0924 11.862 15.75 11 15.75H7Z"
        fill="#D0D0D0"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.2734 2.94397C15.3761 2.5427 15.7847 2.3007 16.186 2.40344C17.2077 2.66505 18.1133 3.25927 18.76 4.09243C19.4068 4.92559 19.7578 5.9503 19.7578 7.005C19.7578 8.05971 19.4068 9.08441 18.76 9.91757C18.1133 10.7507 17.2077 11.345 16.186 11.6066C15.7847 11.7093 15.3761 11.4673 15.2734 11.066C15.1706 10.6648 15.4126 10.2562 15.8139 10.1534C16.513 9.97445 17.1326 9.56787 17.5751 8.99781C18.0176 8.42775 18.2578 7.72664 18.2578 7.005C18.2578 6.28336 18.0176 5.58225 17.5751 5.01219C17.1326 4.44213 16.513 4.03556 15.8139 3.85656C15.4126 3.75382 15.1706 3.34524 15.2734 2.94397Z"
        fill="#D0D0D0"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.2737 14.9625C17.3773 14.5615 17.7864 14.3203 18.1874 14.4238C19.2025 14.6859 20.1024 15.2765 20.7468 16.1034C21.3912 16.9304 21.7439 17.9473 21.7499 18.9957L21.7499 19H21.7499V21C21.7499 21.4142 21.4142 21.75 20.9999 21.75C20.5857 21.75 20.2499 21.4142 20.2499 21V19.0023C20.2454 18.2857 20.0041 17.5907 19.5636 17.0254C19.1227 16.4596 18.507 16.0555 17.8124 15.8762C17.4114 15.7727 17.1702 15.3636 17.2737 14.9625Z"
        fill="#D0D0D0"
      />
    </svg>
  );
};

export const Filters: React.FC<SvgProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0555 4.05546C12.5712 3.53973 13.2707 3.25 14 3.25C14.7293 3.25 15.4288 3.53973 15.9445 4.05546C16.4603 4.57118 16.75 5.27065 16.75 6C16.75 6.72935 16.4603 7.42882 15.9445 7.94454C15.4288 8.46027 14.7293 8.75 14 8.75C13.2707 8.75 12.5712 8.46027 12.0555 7.94454C11.5397 7.42882 11.25 6.72935 11.25 6C11.25 5.27065 11.5397 4.57118 12.0555 4.05546ZM14 4.75C13.6685 4.75 13.3505 4.8817 13.1161 5.11612C12.8817 5.35054 12.75 5.66848 12.75 6C12.75 6.33152 12.8817 6.64946 13.1161 6.88388C13.3505 7.1183 13.6685 7.25 14 7.25C14.3315 7.25 14.6495 7.1183 14.8839 6.88388C15.1183 6.64946 15.25 6.33152 15.25 6C15.25 5.66848 15.1183 5.35054 14.8839 5.11612C14.6495 4.8817 14.3315 4.75 14 4.75Z"
        fill="#D0D0D0"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.25 6C3.25 5.58579 3.58579 5.25 4 5.25H12C12.4142 5.25 12.75 5.58579 12.75 6C12.75 6.41421 12.4142 6.75 12 6.75H4C3.58579 6.75 3.25 6.41421 3.25 6Z"
        fill="#D0D0D0"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.25 6C15.25 5.58579 15.5858 5.25 16 5.25H20C20.4142 5.25 20.75 5.58579 20.75 6C20.75 6.41421 20.4142 6.75 20 6.75H16C15.5858 6.75 15.25 6.41421 15.25 6Z"
        fill="#D0D0D0"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.05546 10.0555C6.57118 9.53973 7.27065 9.25 8 9.25C8.72935 9.25 9.42882 9.53973 9.94454 10.0555C10.4603 10.5712 10.75 11.2707 10.75 12C10.75 12.7293 10.4603 13.4288 9.94454 13.9445C9.42882 14.4603 8.72935 14.75 8 14.75C7.27065 14.75 6.57118 14.4603 6.05546 13.9445C5.53973 13.4288 5.25 12.7293 5.25 12C5.25 11.2707 5.53973 10.5712 6.05546 10.0555ZM8 10.75C7.66848 10.75 7.35054 10.8817 7.11612 11.1161C6.8817 11.3505 6.75 11.6685 6.75 12C6.75 12.3315 6.8817 12.6495 7.11612 12.8839C7.35054 13.1183 7.66848 13.25 8 13.25C8.33152 13.25 8.64946 13.1183 8.88388 12.8839C9.1183 12.6495 9.25 12.3315 9.25 12C9.25 11.6685 9.1183 11.3505 8.88388 11.1161C8.64946 10.8817 8.33152 10.75 8 10.75Z"
        fill="#D0D0D0"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H6C6.41421 11.25 6.75 11.5858 6.75 12C6.75 12.4142 6.41421 12.75 6 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12Z"
        fill="#D0D0D0"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.25 12C9.25 11.5858 9.58579 11.25 10 11.25H20C20.4142 11.25 20.75 11.5858 20.75 12C20.75 12.4142 20.4142 12.75 20 12.75H10C9.58579 12.75 9.25 12.4142 9.25 12Z"
        fill="#D0D0D0"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.0555 16.0555C15.5712 15.5397 16.2707 15.25 17 15.25C17.7293 15.25 18.4288 15.5397 18.9445 16.0555C19.4603 16.5712 19.75 17.2707 19.75 18C19.75 18.7293 19.4603 19.4288 18.9445 19.9445C18.4288 20.4603 17.7293 20.75 17 20.75C16.2707 20.75 15.5712 20.4603 15.0555 19.9445C14.5397 19.4288 14.25 18.7293 14.25 18C14.25 17.2707 14.5397 16.5712 15.0555 16.0555ZM17 16.75C16.6685 16.75 16.3505 16.8817 16.1161 17.1161C15.8817 17.3505 15.75 17.6685 15.75 18C15.75 18.3315 15.8817 18.6495 16.1161 18.8839C16.3505 19.1183 16.6685 19.25 17 19.25C17.3315 19.25 17.6495 19.1183 17.8839 18.8839C18.1183 18.6495 18.25 18.3315 18.25 18C18.25 17.6685 18.1183 17.3505 17.8839 17.1161C17.6495 16.8817 17.3315 16.75 17 16.75Z"
        fill="#D0D0D0"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.25 18C3.25 17.5858 3.58579 17.25 4 17.25H15C15.4142 17.25 15.75 17.5858 15.75 18C15.75 18.4142 15.4142 18.75 15 18.75H4C3.58579 18.75 3.25 18.4142 3.25 18Z"
        fill="#D0D0D0"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.25 18C18.25 17.5858 18.5858 17.25 19 17.25H20C20.4142 17.25 20.75 17.5858 20.75 18C20.75 18.4142 20.4142 18.75 20 18.75H19C18.5858 18.75 18.25 18.4142 18.25 18Z"
        fill="#D0D0D0"
      />
    </svg>
  );
};

export const PlusAlternative: React.FC<SvgProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 4.25C12.4142 4.25 12.75 4.58579 12.75 5V19C12.75 19.4142 12.4142 19.75 12 19.75C11.5858 19.75 11.25 19.4142 11.25 19V5C11.25 4.58579 11.5858 4.25 12 4.25Z"
        fill="#040048"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.25 12C4.25 11.5858 4.58579 11.25 5 11.25H19C19.4142 11.25 19.75 11.5858 19.75 12C19.75 12.4142 19.4142 12.75 19 12.75H5C4.58579 12.75 4.25 12.4142 4.25 12Z"
        fill="#040048"
      />
    </svg>
  );
};

export const AllTasks: React.FC<SvgProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="16"
      viewBox="0 0 21 16"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_3_203)">
        <path
          d="M7 2H18"
          stroke="#F1F3F5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 8H18"
          stroke="#F1F3F5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 14H18"
          stroke="#F1F3F5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 2V2.01"
          stroke="#F1F3F5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 8V8.01"
          stroke="#F1F3F5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 14V14.01"
          stroke="#F1F3F5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_3_203">
          <rect width="21" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Progress: React.FC<SvgProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_3_666)">
        <path
          d="M10 20.777C9.12963 20.5796 8.2937 20.2529 7.52002 19.808"
          stroke="#D0D0D0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 3.22302C15.9882 3.67709 17.7632 4.79271 19.0347 6.38723C20.3061 7.98174 20.9984 9.96067 20.9984 12C20.9984 14.0394 20.3061 16.0183 19.0347 17.6128C17.7632 19.2073 15.9882 20.323 14 20.777"
          stroke="#D0D0D0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.57905 17.093C4.03356 16.3004 3.61925 15.4252 3.35205 14.501"
          stroke="#D0D0D0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.12402 10.5C3.28402 9.55002 3.59202 8.65002 4.02402 7.82502L4.19302 7.52002"
          stroke="#D0D0D0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.90698 4.57902C7.84264 3.93492 8.8923 3.47474 9.99998 3.22302"
          stroke="#D0D0D0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_3_666">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Done: React.FC<SvgProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_3_423)">
        <path
          d="M8.99153 3.69C7.89962 4.14199 6.9074 4.8046 6.07153 5.64"
          stroke="#FCFF5D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.12164 8.56C3.6682 9.6503 3.43374 10.8192 3.43164 12"
          stroke="#FCFF5D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.12158 15.44C4.57357 16.5319 5.23618 17.5241 6.07158 18.36"
          stroke="#FCFF5D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.9917 20.31C10.082 20.7634 11.2509 20.9979 12.4317 21"
          stroke="#FCFF5D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.8716 20.31C16.9635 19.858 17.9557 19.1954 18.7916 18.36"
          stroke="#FCFF5D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.7417 15.44C21.1951 14.3497 21.4296 13.1808 21.4317 12"
          stroke="#FCFF5D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.7417 8.56002C20.2898 7.4681 19.6272 6.47588 18.7917 5.64001"
          stroke="#FCFF5D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.8716 3.69C14.7813 3.23656 13.6125 3.0021 12.4316 3"
          stroke="#FCFF5D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.43164 12L11.4316 14L15.4316 10"
          stroke="#FCFF5D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_3_423">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.431641)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Comentary: React.FC<SvgProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="16"
      viewBox="0 0 15 16"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.2478 12.7133C10.2104 14.7509 7.19346 15.1912 4.72455 14.0494C4.36008 13.9026 4.06127 13.784 3.77719 13.784C2.98594 13.7887 2.00105 14.556 1.48918 14.0447C0.977312 13.5328 1.74512 12.5471 1.74512 11.7511C1.74512 11.467 1.63122 11.1735 1.48449 10.8083C0.342164 8.33979 0.783016 5.32183 2.82045 3.28484C5.42134 0.682995 9.64696 0.682995 12.2478 3.28417C14.8534 5.89004 14.8487 10.1121 12.2478 12.7133Z"
        stroke="#F1F3F5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.1599 8.27535H10.1659"
        stroke="#F1F3F5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.48732 8.27535H7.49332"
        stroke="#F1F3F5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.81446 8.27535H4.82046"
        stroke="#F1F3F5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CalendarAlternative: React.FC<SvgProps> = (props) => {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="white"
      {...props}
    >
      <path
        d="M6.01514 1.33337V3.33337"
        stroke=""
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.3486 1.33337V3.33337"
        stroke=""
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.01514 6.06006H14.3485"
        stroke=""
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6819 5.66671V11.3334C14.6819 13.3334 13.6819 14.6667 11.3486 14.6667H6.01522C3.68188 14.6667 2.68188 13.3334 2.68188 11.3334V5.66671C2.68188 3.66671 3.68188 2.33337 6.01522 2.33337H11.3486C13.6819 2.33337 14.6819 3.66671 14.6819 5.66671Z"
        stroke=""
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.1451 9.13338H11.1511"
        stroke=""
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.1451 11.1334H11.1511"
        stroke=""
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.67879 9.13338H8.68478"
        stroke=""
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.67879 11.1334H8.68478"
        stroke=""
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.21151 9.13338H6.2175"
        stroke=""
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.21151 11.1334H6.2175"
        stroke=""
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Edit: React.FC<SvgProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.8125 4.19402C16.2466 4.01419 16.712 3.92163 17.1819 3.92163C17.6518 3.92163 18.1171 4.01419 18.5513 4.19402C18.9854 4.37386 19.3799 4.63744 19.7122 4.96973C20.0445 5.30202 20.3081 5.6965 20.4879 6.13065C20.6678 6.56481 20.7603 7.03013 20.7603 7.50006C20.7603 7.96998 20.6678 8.43531 20.4879 8.86946C20.3081 9.30362 20.0445 9.6981 19.7122 10.0304L9.21221 20.5304C9.07156 20.671 8.8808 20.7501 8.68188 20.7501H4.68188C4.26767 20.7501 3.93188 20.4143 3.93188 20.0001V16.0001C3.93188 15.8011 4.0109 15.6104 4.15155 15.4697L14.6516 4.96973C14.9838 4.63744 15.3783 4.37386 15.8125 4.19402ZM17.1819 5.42163C16.9089 5.42163 16.6387 5.47539 16.3865 5.57984C16.1343 5.68429 15.9052 5.83739 15.7122 6.03039L5.43188 16.3107V19.2501H8.37122L18.6516 8.96973C18.8446 8.77673 18.9977 8.5476 19.1021 8.29544C19.2066 8.04327 19.2603 7.773 19.2603 7.50006C19.2603 7.22711 19.2066 6.95684 19.1021 6.70468C18.9977 6.45251 18.8446 6.22339 18.6516 6.03039C18.4586 5.83739 18.2294 5.68429 17.9773 5.57984C17.7251 5.47539 17.4548 5.42163 17.1819 5.42163Z"
        fill="#F1F3F5"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.6516 5.96967C13.9444 5.67678 14.4193 5.67678 14.7122 5.96967L18.7122 9.96967C19.0051 10.2626 19.0051 10.7374 18.7122 11.0303C18.4193 11.3232 17.9444 11.3232 17.6516 11.0303L13.6516 7.03033C13.3587 6.73744 13.3587 6.26256 13.6516 5.96967Z"
        fill="#F1F3F5"
      />
    </svg>
  );
};

export const Trash: React.FC<SvgProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.93188 7C3.93188 6.58579 4.26767 6.25 4.68188 6.25H20.6819C21.0961 6.25 21.4319 6.58579 21.4319 7C21.4319 7.41421 21.0961 7.75 20.6819 7.75H4.68188C4.26767 7.75 3.93188 7.41421 3.93188 7Z"
        fill="#F1F3F5"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.6819 10.25C11.0961 10.25 11.4319 10.5858 11.4319 11V17C11.4319 17.4142 11.0961 17.75 10.6819 17.75C10.2677 17.75 9.93188 17.4142 9.93188 17V11C9.93188 10.5858 10.2677 10.25 10.6819 10.25Z"
        fill="#F1F3F5"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.6819 10.25C15.0961 10.25 15.4319 10.5858 15.4319 11V17C15.4319 17.4142 15.0961 17.75 14.6819 17.75C14.2677 17.75 13.9319 17.4142 13.9319 17V11C13.9319 10.5858 14.2677 10.25 14.6819 10.25Z"
        fill="#F1F3F5"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.61964 6.25263C6.03243 6.21823 6.39494 6.52497 6.42934 6.93776L7.42934 18.9378C7.43106 18.9585 7.43193 18.9793 7.43193 19C7.43193 19.3316 7.56362 19.6495 7.79804 19.8839C8.03246 20.1183 8.35041 20.25 8.68193 20.25H16.6819C17.0134 20.25 17.3314 20.1183 17.5658 19.8839C17.8002 19.6495 17.9319 19.3316 17.9319 19C17.9319 18.9793 17.9328 18.9585 17.9345 18.9378L18.9345 6.93776C18.9689 6.52497 19.3314 6.21823 19.7442 6.25263C20.157 6.28703 20.4637 6.64954 20.4293 7.06233L19.4317 19.0337C19.423 19.7509 19.1343 20.4368 18.6265 20.9446C18.1107 21.4603 17.4113 21.75 16.6819 21.75H8.68193C7.95258 21.75 7.25311 21.4603 6.73738 20.9446C6.2296 20.4368 5.9409 19.7509 5.93213 19.0337L4.93452 7.06233C4.90012 6.64954 5.20686 6.28703 5.61964 6.25263Z"
        fill="#F1F3F5"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.6819 3.75C10.6156 3.75 10.552 3.77634 10.5051 3.82322C10.4582 3.87011 10.4319 3.9337 10.4319 4V7C10.4319 7.41421 10.0961 7.75 9.68188 7.75C9.26767 7.75 8.93188 7.41421 8.93188 7V4C8.93188 3.53587 9.11626 3.09075 9.44445 2.76256C9.77264 2.43437 10.2178 2.25 10.6819 2.25H14.6819C15.146 2.25 15.5911 2.43437 15.9193 2.76256C16.2475 3.09075 16.4319 3.53587 16.4319 4V7C16.4319 7.41421 16.0961 7.75 15.6819 7.75C15.2677 7.75 14.9319 7.41421 14.9319 7V4C14.9319 3.9337 14.9055 3.87011 14.8587 3.82322C14.8118 3.77634 14.7482 3.75 14.6819 3.75H10.6819Z"
        fill="#F1F3F5"
      />
    </svg>
  );
};

export const Close: React.FC<SvgProps> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      stroke-winecap="round"
      stroke-winejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
      <path d="M9 9l6 6m0 -6l-6 6" />
    </svg>
  );
};
