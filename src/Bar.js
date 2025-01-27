import React from "react";
import { Rect, Text, G } from "react-native-svg";

const Bar = props => {
  const {
    index,
    startVal,
    endVal,
    scale,
    barHeight,
    task,
    onPress,
    primaryColor,
    secondaryColor,
    textColor
  } = props;

  const padding = 4;

  const x = scale(startVal);
  const y = barHeight * index + padding * (index + 1);
  const taskDuration = scale(endVal) - scale(startVal);
  const taskProgress = task.progress ? task.progress : 0;

  return (
    <G onPressIn={() => onPress(task)}>
      <Rect
        x={x}
        y={y}
        height={barHeight}
        width={taskDuration * taskProgress}
        strokeWidth={2}
        fill={primaryColor}
      />

      <Rect
        x={x + taskDuration * taskProgress}
        y={y}
        height={barHeight}
        width={taskDuration - taskDuration * taskProgress}
        strokeWidth={2}
        fill={secondaryColor}
      />

      <Text
        fill={textColor}
        stroke={textColor}
        fontSize={12}
        textAnchor="start"
        x={x + 10}
        y={y + (barHeight + 10) / 2}
      >
        {task.name}
      </Text>
    </G>
  );
};

export default Bar;
