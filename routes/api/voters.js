const router = require('express').Router();
let Voter = require('../../models/voters');

router.route('/').get((req, res) => {
    Voter.find({})
        .then(voters => {
            console.log('voters', voters)
            res.json(voters)
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const subOrganization = req.body.subOrganization;
    const registeredVoter = req.body.registeredVoter;

    const newVoter = new Voter({
        name,
        subOrganization,
        registeredVoter,
    });

    newVoter.save()
        .then(() => res.json('New Voter added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Voter.findById(req.params.id)
        .then(voter => res.json(voter))
        .catch(err => {
            console.log(err)
            res.status(400).json('Error: ' + err)
        });
});

router.route('/:id').delete((req, res) => {
    Voter.findByIdAndDelete(req.params.id)
        .then(() => res.json('Voter deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Voter.findById(req.params.id)
        .then(voter => {
            voter.name = req.body.name;
            voter.subOrganization = req.body.subOrganization;
            voter.registeredVoter = req.body.registeredVoter;

            voter.save()
                .then(() => res.json('voter updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;