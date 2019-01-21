import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Button from './Button';
import styles from './style';

const Tooltip = ({
  isFirstStep,
  isLastStep,
  handleNext,
  handlePrev,
  handleStop,
  currentStep,
  primaryColor,
}) => (
  <View>
    <View style={styles.tooltipContainer}>
      <Text style={styles.tooltipText}>{currentStep.text}</Text>
    </View>
    <View style={[styles.bottomBar]}>
      {
        !isLastStep ?
          <TouchableOpacity onPress={handleStop}>
            <Button primaryColor={primaryColor}>Skip</Button>
          </TouchableOpacity>
          : null
      }
      {
        !isFirstStep ?
          <TouchableOpacity onPress={handlePrev}>
            <Button primaryColor={primaryColor}>Previous</Button>
          </TouchableOpacity>
          : null
      }
      {
        !isLastStep ?
          <TouchableOpacity onPress={handleNext}>
            <Button primaryColor={primaryColor}>Next</Button>
          </TouchableOpacity> :
          <TouchableOpacity onPress={handleStop}>
            <Button primaryColor={primaryColor}>Finish</Button>
          </TouchableOpacity>
      }
    </View>
  </View>
);

export default Tooltip;
