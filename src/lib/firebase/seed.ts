import { seedCoursesToFirestore } from "./firestore";

/**
 * Run this function or call it via an admin route to seed the initial catalog
 * into your Cloud Firestore database.
 */
export async function runCatalogSeed() {
  try {
    console.log("Seeding courses into Cloud Firestore...");
    const result = await seedCoursesToFirestore();
    console.log(`Successfully seeded ${result.count} courses!`);
    return result;
  } catch (error) {
    console.error("Failed to seed courses:", error);
    throw error;
  }
}
