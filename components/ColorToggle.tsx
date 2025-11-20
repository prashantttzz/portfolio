"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Updated palette — elegant and balanced, keeping Amber
const COLOR_PRESETS = [
  { name: "Amber", value: "40 100% 50%" },   // golden-yellow (main accent)
  { name: "Violet", value: "265 80% 60%" },  // warm purple
  { name: "Sky", value: "200 90% 60%" },     // soft tech blue
  { name: "Mint", value: "160 70% 50%" },    // subtle mint green
  { name: "Coral", value: "10 90% 60%" },    // coral red
];

const ColorRadio = () => {
  const [selected, setSelected] = useState(() => {
    return localStorage.getItem("accent_color") || COLOR_PRESETS[0].value;
  });

  const [displayedColors, setDisplayedColors] = useState(COLOR_PRESETS);

  // Handle mobile reduction (only 3 colors)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setDisplayedColors(COLOR_PRESETS.slice(0, 3));
      } else {
        setDisplayedColors(COLOR_PRESETS);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty("--accent", selected);
    document.documentElement.style.setProperty("--primary", selected);
    document.documentElement.style.setProperty("--ring", selected);
    localStorage.setItem("accent_color", selected);
  }, [selected]);

  return (
    <StyledWrapper count={displayedColors.length} className=" !z-10 ">
      <div className="glass-radio-group z-10">
        {displayedColors.map((color, index) => (
          <React.Fragment key={color.name}>
            <input
              type="radio"
              id={`color-${index}`}
              name="color"
              checked={selected === color.value}
              onChange={() => setSelected(color.value)}
            />
            <label htmlFor={`color-${index}`}>{color.name}</label>
          </React.Fragment>
        ))}
        <div
          className="glass-glider"
          style={{
            transform: `translateX(${
              displayedColors.findIndex((c) => c.value === selected) * 100
            }%)`,
            background: `linear-gradient(135deg, hsl(${selected} / 0.4), hsl(${selected}))`,
            boxShadow: `0 0 20px hsl(${selected} / 0.5), 0 0 12px hsl(${selected} / 0.3) inset`,
          }}
        />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div<{ count: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.2rem;
  width: 100%;

  .glass-radio-group {
    --bg: rgba(255, 255, 255, 0.06);
    --text: #e5e5e5;

    display: flex;
    position: relative;
    background: var(--bg);
    border-radius: 1rem;
    backdrop-filter: blur(12px);
    box-shadow:
      inset 1px 1px 4px rgba(255, 255, 255, 0.2),
      inset -1px -1px 6px rgba(0, 0, 0, 0.3),
      0 4px 12px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    width: fit-content;
  }

  .glass-radio-group input {
    display: none;
  }

  .glass-radio-group label {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 80px;
    font-size: 14px;
    padding: 0.8rem 1.6rem;
    cursor: pointer;
    font-weight: 600;
    letter-spacing: 0.3px;
    color: var(--text);
    position: relative;
    z-index: 2;
    transition: color 0.3s ease-in-out;
  }

  .glass-radio-group label:hover {
    color: white;
  }

  .glass-radio-group input:checked + label {
    color: #fff;
  }

  .glass-glider {
    position: absolute;
    top: 0;
    bottom: 0;
    width: ${({ count }) => `calc(100% / ${count})`};
    border-radius: 1rem;
    z-index: 1;
    transition:
      transform 0.5s cubic-bezier(0.37, 1.95, 0.66, 0.56),
      background 0.4s ease-in-out,
      box-shadow 0.4s ease-in-out;
  }
`;

export default ColorRadio;
