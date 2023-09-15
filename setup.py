from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in patient_details/__init__.py
from patient_details import __version__ as version

setup(
	name="patient_details",
	version=version,
	description="Patient Details Test",
	author="gk",
	author_email="gk@app.io",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
