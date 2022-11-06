class NeuralNetwork{
  constructor(InputNodes,HiddenNodes,OutputNodes){
    this.InputNodes = InputNodes;
    this.HiddenNodes = HiddenNodes;
    this.OutputNodes = OutputNodes;
    
    this.weightsIH = new Matrix(this.HiddenNodes,this.InputNodes);
    this.weightsHO = new Matrix(this.OutputNodes,this.HiddenNodes);
    this.biasH = new Matrix(this.HiddenNodes,1);
    this.biasO = new Matrix(this.OutputNodes,1);
    this.biasH.randomize();
    this.biasO.randomize();
  };
  feedforward(inputs){
    
  };
};