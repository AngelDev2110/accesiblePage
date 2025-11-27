<template>
  <main>
    <h1>Join the Coalition of Ordered Governments</h1>

    <p>
      The fate of Sera depends on those willing to stand against the Locust
      Horde. The Coalition of Ordered Governments (COG) is constantly seeking
      recruits who are brave, disciplined, and ready to defend humanity at all
      costs.
    </p>

    <p>
      Whether you're inspired by the legacy of Delta Squad or driven by the duty
      to protect your home, every soldier plays a vital role in the war effort.
      Your journey begins with a single step—your enlistment.
    </p>

    <h2>COG Recruitment Requirements</h2>

    <p>
      As a new recruit, you must demonstrate commitment, physical resilience,
      and the ability to operate under extreme conditions. The war against the
      Locust demands soldiers who can adapt, survive, and protect others.
    </p>

    <p>
      Your application will be reviewed by COG Command. Make sure your
      information is accurate and your message reflects your motivation to
      serve. Every detail counts in the fight for humanity’s survival.
    </p>

    <form
      class="recruitment-form space-y-8 mx-auto p-10 rounded-xl bg-[#141618] border border-[#3b3f45] shadow-[0_0_25px_rgba(255,0,0,0.12)] mt-8"
      aria-labelledby="form-heading"
      @submit.prevent="handleSubmit"
    >
      <h3
        id="form-heading"
        class="font-coalition tracking-widest text-[#d0d3d6] text-center"
      >
        COG Enlistment Form
      </h3>

      <label class="inline-block space-y-2 w-[100%] sm:w-[45%]">
        <span class="font-coalition tracking-wide text-[#a7abb0] uppercase">
          Full Name
        </span>
        <input
          v-model="name"
          name="name"
          type="text"
          placeholder="Enter your full name"
          required
          class="w-full p-3 rounded-lg bg-[#1f2226] border border-[#5a5f66] text-gray-100 placeholder-gray-500 shadow-md focus:outline-none focus:ring-2 focus:ring-[#b30000] focus:border-[#b30000] transition"
        />
      </label>

      <label class="inline-block space-y-2 w-[100%] sm:w-[45%] sm:ml-[10%]">
        <span class="font-coalition tracking-wide text-[#a7abb0] uppercase">
          Email
        </span>
        <input
          v-model="email"
          name="email"
          type="email"
          placeholder="example@cog.gov"
          required
          class="w-full p-3 rounded-lg bg-[#1f2226] border border-[#5a5f66] text-gray-100 placeholder-gray-500 shadow-md focus:outline-none focus:ring-2 focus:ring-[#b30000] focus:border-[#b30000] transition"
        />
      </label>

      <label class="block space-y-2">
        <span class="font-coalition tracking-wide text-[#a7abb0] uppercase">
          Why do you want to join the COG?
        </span>
        <textarea
          v-model="message"
          name="message"
          rows="5"
          placeholder="Share your motivation for joining the Coalition..."
          required
          class="w-full p-3 rounded-lg bg-[#1f2226] border border-[#5a5f66] text-gray-100 placeholder-gray-500 shadow-md resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
        ></textarea>
      </label>

      <button
        type="submit"
        class="w-full py-3 bg-bg text-white rounded-lg font-coalition tracking-widest shadow-lg hover:bg-primary hover:shadow-[0_0_20px_rgba(255,0,0,0.4)] active:scale-95 transition uppercase"
      >
        ENLIST NOW
      </button>
    </form>
    <div
      id="custom-toast"
      class="fixed top-8 right-6 bg-primary text-white font-coalition tracking-widest px-6 py-3 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.5)] opacity-0 pointer-events-none transition-all duration-500 z-[100]"
      role="status"
      aria-live="polite"
    >
      ENLISTED SUCCESSFULLY
    </div>
  </main>
</template>

<script setup>
// Imports

// Component Options
useHead({
  title: "Gears of War - Recruitment",
});

// Props and Emits

// Composition API Helpers

// Reactive Variables
const name = ref("");
const email = ref("");
const message = ref("");

// Computed Properties

// Watchers

// Lifecycle Hooks

// Methods
const resetForm = () => {
  name.value = "";
  email.value = "";
  message.value = "";
};
const showToast = () => {
  const toast = document.getElementById("custom-toast");
  if (!toast) return;

  toast.style.opacity = "1";
  toast.style.transform = "translateY(0)";
  toast.style.pointerEvents = "auto";

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.pointerEvents = "none";
  }, 2500);
};

const handleSubmit = () => {
  showToast();
  resetForm();
};
</script>

<style scoped></style>
