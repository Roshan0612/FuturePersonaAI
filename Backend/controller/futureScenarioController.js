import FutureScenario from '../models/FutureScenario.js';

export const createScenario = async (req, res) => {
  try {
    const { title, description, predictions } = req.body;
    const newScenario = new FutureScenario({
      user: req.user.id,  // from authentication middleware
      title,
      description,
      predictions
    });
    await newScenario.save();
    res.status(201).json(newScenario);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

export const getScenarios = async (req, res) => {
  try {
    const scenarios = await FutureScenario.find({ user: req.user.id });
    res.json(scenarios);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
