ServerEvents.recipes((event) => {
  const greg = event.recipes.gtceu;

  event.remove({ output: "megacells:accumulation_processor_press" });

  greg
    .laser_engraver("gtceu:megacells_accumulation_processor_press")
    .itemInputs("#forge:plates/steel")
    .notConsumable("gtceu:black_glass_lens")
    .itemOutputs("megacells:accumulation_processor_press")
    .duration(500)
    .EUt(30);
});
