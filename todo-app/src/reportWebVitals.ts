import { ReportHandler } from 'web-vitals';

/**
 * @description Takes an optional `onPerfEntry` argument and runs the `getCLS`,
 * `getFID`, `getFCP`, `getLCP`, and `getTTFB` functions when provided with a valid
 * `onPerfEntry` instance.
 * 
 * @param { ReportHandler } onPerfEntry - callback function to be called with Web
 * Vitals data upon entering the performance entry point.
 */
const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
