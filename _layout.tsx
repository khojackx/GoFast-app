import { Stack } from 'expo-router';
import RideBookingScreen from './ride-booking-screen';
import RealTimeTracking from './real-time-tracking';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen 
        name="ride-booking" 
        component={RideBookingScreen} 
        options={{ title: 'Book a Ride' }}
      />
      <Stack.Screen 
        name="real-time-tracking" 
        component={RealTimeTracking} 
        options={{ title: 'Real-Time Tracking' }}
      />
    </Stack>
  );
}