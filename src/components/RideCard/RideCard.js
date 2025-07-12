@@ .. @@
 import React, { useEffect, useState } from "react";
-import "../RideCard/RideCard,c";
-import RideCard from "../../components/RideCard/RideCard";
-import { getRideDetails } from "../../api/getMyRideApi";
+import "./RideCard.css";

-const ActiveRides = () => {
+const RideCard = ({ ride }) => {
-  const [rides, setRides] = useState([]);
-  const rideId = 1; // Hardcoded for now
-
-  useEffect(() => {
-    const fetchRideData = async () => {
-      try {
-        const rideData = await getRideDetails(rideId);
-        console.log("Fetched Ride Data:", rideData);
-        if (rideData) {
-          setRides([rideData]);
-        }
-      } catch (error) {
-        console.error("Failed to fetch ride data:", error);
-      }
-    };
-
-    fetchRideData();
-  }, []);
+  if (!ride) {
+    return <div className="ride-card-container">No ride data available</div>;
+  }

   return (
-    <div className="active-rides-container">
-      {rides.length > 0 ? (
-        rides.map((ride, index) => <RideCard key={index} ride={ride} />)
-      ) : (
-        <div className="loading-container">Loading rides...</div>
-      )}
+    <div className="ride-card-container">
+      <h3>
+        Ride #{ride.rideId}
+        <span>{ride.rideStatus}</span>
+      </h3>
+      <div className="ride-details">
+         }
       <div>
+          <span className="location">Pickup:</span> {ride.pickupLocation        }
?.coordinates?.join(", ") || "N/A"}
+        </div>
+        <div>
+          <span className="location">Drop-off:</span> {ride.dropOffLocation?.coordinates?.join(", ") || "N/A"}
+        </div>
+        <div>
+          <span className="fare">Fare:</span> ${ride.fare?.toFixed(2) || "0.00"}
+        </div>
+      </div>
+      {ride.driver && (
+        <div className="driver-details">
+          <h4>Driver Information</h4>
+          <div>Name: {ride.driver.user?.name || "N/A"}</div>
+          <div>Rating: {ride.driver.rating?.toFixed(1) || "N/A"}</div>
+          <div>Vehicle: {ride.driver.vehicleId || "N/A"}</div>
+        </div>
+      )}
+      <div className="timestamps">
+        <div>Created: {new Date(ride.createdTime).toLocaleString()}</div>
+        {ride.startedAt && <div>Started: {new Date(ride.startedAt).toLocaleString()}</div>}
+        {ride.endedAt && <div>Ended: {new Date(ride.endedAt).toLocaleString()}</div>}
+      </div>
     </div>
   );
 };

-export default ActiveRides;
+export default RideCard;