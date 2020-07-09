class NeuralNetwork {

    static perceptron(weights = [], bias = 0) {
        let data = {};

        data.predict = function (features) {
            if (features.length !== weights.length) return null;

            let score = 0;

            for (let i = 0; i < weights.length; i++) {
                score += weights[i] * features[i];
            }
            score += bias;

            return score > 0 ? 1 : 0;
        };

        data.train = function (features, label) {
            if (label !== 0 && label !== 1) return null;

            if (features.length !== weights.length) {
                weights = features;
                bias = 1;
            }

            let prediction = data.predict(features);

            if (prediction !== label) {

                let gradient = label - prediction;

                for (let i = 0; i < weights.length; i++) {
                    weights[i] += gradient * features[i];
                }
                
                bias += gradient;
            }
            return data;
        };

        data.weights = function () {
            return weights;
        };

        data.bias = function () {
            return bias;
        };

        return data;
    }
}