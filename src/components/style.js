import { StyleSheet } from 'react-native';

export const STEP_NUMBER_RADIUS: number = 14;
export const STEP_NUMBER_DIAMETER: number = STEP_NUMBER_RADIUS * 2;
export const ZINDEX: number = 100;
export const MARGIN: number = 13;
export const OFFSET_WIDTH: number = 4;
export const ARROW_SIZE: number = 6;

export default StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: ZINDEX,
  },
  arrow: {
    position: 'absolute',
    borderColor: 'transparent',
    borderWidth: ARROW_SIZE,
  },
  tooltip: {
    backgroundColor: 'rgba(255,255,255,0)',
    position: 'absolute',
    borderRadius: 15,
    paddingTop: 15,
    paddingHorizontal: 15,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#fff'
  },
  tooltipText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  tooltipContainer: {
    flex: 1,
  },
  button: {
    padding: 10,
  },
  bottomBar: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },


});
