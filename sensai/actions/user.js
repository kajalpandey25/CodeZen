import { industries } from "@/data/industries";
import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function updateUser(data) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: {
      clerkUserId: userId,
    },
  });

  if (!user) throw new Error("User not-found");

  try {
    const result = await db.$transaction(
      async () => {
        //  find if the industry exists
        // let industryInsight = await TicketX.industryInsights.findUnique({
        //     where: {
        //         industry: data.industry,
        //     },
        // });
        // if industry doesn't exist, create it with default values - will replace it with ai later
        // update the user
      },
      {
        timeout: 10000, // default: 5000
      }
    );

    return result.user;
  } catch (error) {
    console.log("Error updating user and industry:", error.message);
    throw new Error("Failed to update profile");
  }
}
